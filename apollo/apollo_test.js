import React from 'react';
import jest from 'jest-expo';
import renderer from 'react-test-renderer';
import Apollo from './apollo'

describe('',()=>{
	it('should test the apollo setup finction'){
		const client = jest.fn(() => Promise.resolve(Apollo));
		console.log(client)
	}
})