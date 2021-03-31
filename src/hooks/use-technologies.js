import { useStaticQuery, graphql } from "gatsby";

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
