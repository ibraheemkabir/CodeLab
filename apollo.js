import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";
import { AsyncStorage } from 'react-native';

const makeApolloClient = (token) => {
	const httpLink = new HttpLink({
		uri: "https://api.github.com/graphql",
	});

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: `Bearer ${token}`
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