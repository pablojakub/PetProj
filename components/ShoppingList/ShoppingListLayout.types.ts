import { itemData, ShoppingListItemType } from "./ShoppingListItem/ShoppingListItem.types";

export interface ShoppingListLayoutProps {
  isShoppingList: boolean;
  shoppingListName: string;
  shoppingListItems: ShoppingListItemType[];
  onAddItem: (data: itemData) => void;
  onEditPrice: (data: itemData) => void;
  onOpenModal?: () => void;
}