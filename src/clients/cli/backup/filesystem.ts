import * as Config_model from "../../../models/config";
import * as Cosmosdb_client from "../../cosmosdb";
import * as Backup_client from "../../backup";

export const client = (): Promise<void> => {
  return Config_model.get_cosmosdb_config()
    .then((cosmosdb) => Cosmosdb_client.get_all_items(cosmosdb))
    .then((items_by_containers) =>
      Config_model.get_filesystem_config().then((filesystem) =>
        Backup_client.backup_cosmosdb_containers_to_filesystem(
          filesystem,
          items_by_containers
        )
      )
    );
};
