import { h } from 'preact';
import { expect } from 'chai';
const router = require('../'); // eslint-disable-line
const { Router, Link, route } = router;
/** @jsx h */

describe('dist', () => {
	it('should export Router, Link and route', () => {
		expect(Router).to.be.a('function');
		expect(Link).to.be.a('function');
		expect(route).to.be.a('function');
		expect(router).to.equal(Router);
	});

	describe('Router', () => {
		it('should be instantiable', () => {
			let router = new Router({});
			let children = [
				<foo path="/" />,
				<foo path="/foo" />,
				<foo path="/foo/bar" />
			];

			expect(
				router.render({ children }, { url:'/foo' })
			).to.equal(children[1]);

			expect(
				router.render({ children }, { url:'/' })
			).to.equal(children[0]);

			expect(
				router.render({ children }, { url:'/foo/bar' })
			).to.equal(children[2]);
		});
	});
});
