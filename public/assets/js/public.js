jQuery(document).ready( function( $) {
	var $btnLike = $('.btn-like');

		$btnLike.on('click', function(event) {
			event.preventDefault();
			var postID = $(event.target).parent('.btn-like').data('postid');

			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: wplsAjax.url,
				data: {
					action: 'like-post',
					nonce: wplsAjax.nonce,
					doLike: 'true',
					postID: postID
				}
			}).done(function(data) {
				var $msgBtn  = $('.btn-like[data-postid="' + data.post_id+'"]'),
					$msgCount = $msgBtn.children('span.count');

				// $msgBtn.text(data.msg_btn);
				// $msgLike.text(data.msg_like);
				$msgBtn.toggleClass('voted');
				$msgCount.html( data.total);
			});
		});
});