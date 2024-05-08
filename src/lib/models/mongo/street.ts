import type { Street } from "$lib/types/placemark-types";
import { Schema, model } from "mongoose";

import pkg from "mongoose";
const { models } = pkg;

const streetSchema = new Schema<Street>({
  name: String,
  img: String,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  User: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
});

export const StreetMongoose = models["Street"] || model("Street", streetSchema);