import { useStaticQuery, graphql } from "gatsby";
import useSupaBaseClient from "./use-supabase-client";

export function useNewTechnologies() {
	const sb = useSupaBaseClient();
	return sb.from("technologies");
}

const useTechnologies = () => {
	const data = useStaticQuery(graphql`
		{
			allDataJson {
				edges {
					node {
						technologies {
							title
							href
							image {
								publicURL
								extension
							}
						}
					}
				}
			}
		}
	`);
	return data.allDataJson.edges[0].node.technologies;
};

export default useTechnologies;
