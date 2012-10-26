var helpers = (function helpers(){
	return {
		lessonAnswerClick : function(answer) {
			_gaq.push(['_trackEvent', 'Answer', answer]);
		}
	};
})();
