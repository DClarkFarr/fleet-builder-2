import mongoose, { HydratedDocument, Model, Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

export interface IUser {
    name: string;
    alliance: string;
    email: string;
    password?: string;
    admiralLevel: number;
    boost: {
        leadership: number;
        hp: number;
        shield: number;
        armor: number;
    };
}

interface IUserMethods {
    authenticate(password: string): Promise<boolean>;
    getPasswordHash(): Promise<string | undefined>;
}

export interface IUserDocument extends HydratedDocument<IUser, IUserMethods> {}

export interface IUserModel extends Model<IUser, {}, IUserMethods> {
    findByEmail(email: string): Promise<IUserDocument | null>;
}

const UserSchema = new Schema<IUser, IUserModel, IUserMethods>({
    name: {
        type: String,
        required: true,
    },
    alliance: {
        type: String,
        default: "AVN",
    },
    admiralLevel: {
        type: Number,
        default: 1,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        set: (email: string) => email.toLowerCase().trim(),
        validate: [
            {
                validator(val: string) {
                    return validator.isEmail(val);
                },
                message: "Email must be a valid email address",
            },
        ],
    },
    password: {
        type: String,
        required: true,
        hide: true,
        set: (password: string) => bcrypt.hashSync(password, 10),
    },
    boost: {
        leadership: {
            type: Number,
            default: 0,
        },
        hp: {
            type: Number,
            default: 0,
        },
        shield: {
            type: Number,
            default: 0,
        },
        armor: {
            type: Number,
            default: 0,
        },
    },
});

UserSchema.methods.authenticate = async function (password: string) {
    const orig = await this.getPasswordHash();
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.getPasswordHash = async function () {
    var found = await User.findOne({ _id: this.id }).select("password").exec();
    return found?.password;
};

UserSchema.statics.findByEmail = function findByEmail(email: string) {
    return this.findOne({
        email,
    }).exec();
};

UserSchema.path("email").validate(async function (email: string) {
    let orig;
    let found: IUserDocument | null = null;

    orig = await User.findOne({
        _id: this.id,
    });

    if (orig) {
        if (orig.email != email) {
            found = await User.findByEmail(email);
        }
    } else {
        found = await mongoose
            .model("user")
            .findOne({
                _id: { $ne: this.id },
                email: email,
            })
            .exec();
    }

    return !found;
});

UserSchema.index({ email: 1 });

UserSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.deletedAt;
        delete ret.password;
    },
});

UserSchema.set("toObject", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.deletedAt;
        delete ret.password;
    },
});

export const User = mongoose.model<IUser, IUserModel>("user", UserSchema);
