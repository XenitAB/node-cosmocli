import { ItemDefinition } from "@azure/cosmos";

export type account = {
  account_name: string;
};

export type database = account & {
  db_id: string;
};

export type databases = database[];

export type container = database & {
  container_id: string;
};

export type containers = container[];

export type items_by_container = container & {
  items: ItemDefinition[];
};

export type items_by_containers = items_by_container[];
