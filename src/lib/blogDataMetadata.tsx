// import { generateClient } from "aws-amplify/data";
// import Amplify from "aws-amplify";
// import outputs from "../../amplify_outputs.json";
// Amplify.configure(outputs);

// export async function getBlogData(id: string) {
//   const client = generateClient();

//   const res = await (client.models as any).Blog.list({
//     filter: { id: { eq: id } },
//   });

//   return res.data[0];
// }
