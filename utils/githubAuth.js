import { AuthSession } from 'expo';

const REDIRECT_URL = AuthSession.getRedirectUrl();
const github = {
	id: '78056fcf857fffe8db8b',
	secret: '0d6242c69b53a95050765d47ddf0809302257c1d'
};

const githubFields = [
	'user',
	'public_repo',
	'repo',
	'repo_deployment',
	'repo:status',
	'read:repo_hook',
	'read:org',
	'read:public_key',
	'read:gpg_key',
];

function authUrlWithId(id, fields) {

	return (
		`https://github.com/login/oauth/authorize` +
		`?client_id=${id}` +
		`&redirect_uri=${encodeURIComponent(REDIRECT_URL)}` +
		`&scope=${encodeURIComponent(fields.join(' '))}`
	);
}

async function createTokenWithCode(code) {
	const url =
		`https://github.com/login/oauth/access_token` +
		`?client_id=${github.id}` +
		`&client_secret=${github.secret}` +
		`&code=${code}`;

	const res = await fetch(url, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.json();
}

async function getGithubTokenAsync() {
	try {
		const { type, params } = await AuthSession.startAsync({
			authUrl: authUrlWithId(github.id, githubFields),
			
		});
		if (params.error) {
			const { error, error_description, error_uri } = params;
			if (error === 'redirect_uri_mismatch') {
				console.warn(
					`Please set the "Authorization callback URL" in your Github application settings to ${REDIRECT_URL}`
				);
			}
			throw new Error(`Github Auth: ${error} ${error_description}`);
		}
		const { token_type, scope, access_token } = await createTokenWithCode(params.code);
		console.log('---->',access_token)

		return access_token;
	} catch ({ message }) {

		throw new Error(`Github Auth: ${message}`);
	}
}

export default getGithubTokenAsync;
