import S from "@sanity/desk-tool/structure-builder";
import { FiDroplet, FiSettings } from "react-icons/fi";
import { GiKnifeFork } from "react-icons/gi";

export default () =>
  S.list()
    .title("Menu")
    .items([
      S.listItem()
        .title("My Readings")
        .icon(FiDroplet)
        .schemaType("record")
        .child(
          S.documentTypeList("record")
            .title("My Readings")
            .defaultOrdering([{ field: "loggedAt", direction: "desc" }])
        ),

      // Food section
      S.listItem()
        .title("My Foods")
        .icon(GiKnifeFork)
        .child(
          S.list()
            .title("Meal Types")
            .items([
              S.listItem()
                .icon(GiKnifeFork)
                .title("Breakfast")
                .id("breakfast")
                .child(
                  S.documentList()
                    .title("Breakfast")
                    .schemaType("food")
                    .filter(
                      '_type == "food" && defined(foodType) && foodType == "breakfast"'
                    )
                ),
              S.listItem()
                .icon(GiKnifeFork)
                .title("Lunch")
                .id("lunch")
                .child(
                  S.documentList()
                    .title("Lunch")
                    .schemaType("food")
                    .filter(
                      '_type == "food" && defined(foodType) && foodType == "lunch"'
                    )
                ),
              S.listItem()
                .icon(GiKnifeFork)
                .title("Dinner")
                .id("dinner")
                .child(
                  S.documentList()
                    .title("Dinner")
                    .schemaType("food")
                    .filter(
                      '_type == "food" && defined(foodType) && foodType == "dinner"'
                    )
                ),
              S.listItem()
                .icon(GiKnifeFork)
                .title("Snack")
                .id("snack")
                .child(
                  S.documentList()
                    .title("Snack")
                    .schemaType("food")
                    .filter(
                      '_type == "food" && defined(foodType) && foodType == "snack"'
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(FiSettings)
        .child(
          S.editor()
            .id("settings")
            .schemaType("settings")
            .documentId("settings")
            .title("Your Settings")
        ),
      S.divider(),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) => !["record", "food", "settings"].includes(listItem.getId())
      ),
    ]);
