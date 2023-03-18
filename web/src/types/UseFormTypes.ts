import { ComponentPublicInstance, ComponentOptionsBase } from "vue";
import { useForm } from "vue-hooks-form";
import { FieldNode } from "vue-hooks-form/dist/src/utils";
export type UseInput = ReturnType<ReturnType<typeof useForm>["useField"]>;

export type RefType =
  | Element
  | ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      ComponentOptionsBase<
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        {},
        {},
        string
      >,
      {}
    >
  | null;

export type UseInputRef = (nodeRef: RefType | FieldNode) => void;
// export interface UseInput extends UseInputBase {
//   ref: (nodeRef: RefType | FieldNode) => void;
// }
