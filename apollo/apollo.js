import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";
import { AsyncStorage } from 'react-native';
import { createHttpLink } from "apollo-link-http";

const makeApolloClient = (token) => {
	const httpLink = createHttpLink({
		uri: "https://api.github.com/graphql",
	});
	
	const authLink = setContext(async (_, { headers }) => {
		const stored = await AsyncStorage.getItem('GithubStorageKey')
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : `Bearer ${stored}`
			}
		}
	});

	// create an inmemory cache instance for caching graphql data
	const cache = new InMemoryCache()
	// instantiate apollo client with apollo link instance and cache instance
	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache
	});
	return client;
}
export default makeApolloClient;