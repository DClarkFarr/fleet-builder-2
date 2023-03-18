import { useSlots, Slot, VNode } from "vue";

export default function useHasSlot() {
  const slots = useSlots();

  return function hasSlot(name: string) {
    if (!slots[name]) return false;

    const slot = slots[name] as Slot;

    return !isEmptySlot(slot());
  };
}

function isEmptySlot(items: ReturnType<Slot>) {
  if (!items.length) return true;
  return !items.some(hasSlotContent);
}

function hasSlotContent(item: VNode) {
  const type = item.type.toString();
  if (type === "Symbol(Comment)") return false;
  if (
    type === "Symbol(Text)" &&
    typeof item.children === "string" &&
    !item.children?.trim()
  )
    return false;
  return true;
}
