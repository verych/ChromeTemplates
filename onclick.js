//looking for Jira
var jiraComment = document.getElementById('comment');
if(!!jiraComment) {
	jiraComment.value = '*Code review:*\r\n\r\n*Root cause:*\r\n\r\n*What was done:*\r\n\r\n*Side effect:*\r\n\r\n*Unit testing:*\r\n\r\n*Testing Guidelines:*';
}
else {
	alert('No template holders found');
}
