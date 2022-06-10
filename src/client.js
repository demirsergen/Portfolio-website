import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "kma5le70",
  dataset: "production",
  apiVersion: "2021-08-31",
  token: "",
  useCdn: true,
});
