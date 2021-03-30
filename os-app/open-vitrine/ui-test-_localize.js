const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`JBXVitrine_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});

		it('localizes title', function() {
			browser.assert.text('title', uLocalized('JBXVitrineTitle'));
		});

		it('localizes meta[description]', function() {
			browser.assert.attribute('meta[name=description]', 'content', uLocalized('JBXVitrineDescription'));
		});

		it('localizes JBXVitrineCrownName', function () {
			browser.assert.text(JBXVitrineCrownName, uLocalized('JBXVitrineTitle'));
		});

		it('localizes JBXVitrineFeaturesHeading', function () {
			browser.assert.text(JBXVitrineFeaturesHeading, uLocalized('OLSKWordingFeatures'));
		});

		it('localizes JBXVitrineGuideButton', function () {
			browser.assert.text(JBXVitrineGuideButton, uLocalized('OLSKWordingOpenGuide'));
		});

		it('localizes JBXVitrineGazetteHeading', function () {
			browser.assert.text(JBXVitrineGazetteHeading, uLocalized('OLSKGazetteHeadingText'));
		});

		it('localizes JBXVitrineSupportHeading', function () {
			browser.assert.text(JBXVitrineSupportHeading, uLocalized('OLSKWordingFeedbackHeading'));
		});

		it('localizes JBXVitrineSupportBlurb', function () {
			browser.assert.text(JBXVitrineSupportBlurb, uLocalized('OLSKWordingFeedbackBlurb'));
		});

		context('OLSKLanding', function test_OLSKLanding () {

			it('localizes OLSKLandingHeadingText', function () {
				browser.assert.text('.OLSKLandingHeading', uLocalized('JBXVitrineDescription'));
			});

			it('localizes OLSKLandingBlurbText', function () {
				browser.assert.text('.OLSKLandingBlurb', uLocalized('OLSKLandingBlurbText'));
			});

			it('localizes OLSKLandingActionText', function () {
				browser.assert.text('.OLSKLandingAction', uLocalized('OLSKWordingOpenApp'));
			});
		
		});


	});

});
