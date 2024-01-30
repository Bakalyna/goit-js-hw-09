const feedbackFormRef = document.querySelector('.feedback-form');
feedbackFormRef.addEventListener('input', onFeedbackFormInput);
function onFeedbackFormInput(e) {
  const userEmail = feedbackFormRef.elements.email.value;
  const userMessage = feedbackFormRef.elements.message.value;
  const userData = {
    email: userEmail,
    message: userMessage,
  };
  const jsonData = JSON.stringify(userData);
  localStorage.setItem('feedback-form-state', jsonData);
}
function onDomLoad() {
  const jsonData = localStorage.getItem('feedback-form-state');
  const userData = JSON.parse(jsonData);
  console.log(userData);
  feedbackFormRef.elements.email.value = userData?.email || '';
  feedbackFormRef.elements.message.value = userData?.message || '';
}

document.addEventListener('DOMContentLoaded', onDomLoad);

feedbackFormRef.addEventListener('submit', onFeedbackFormSubmit);
function onFeedbackFormSubmit(e) {
  e.preventDefault();

  const userEmail = feedbackFormRef.elements.email.value;
  const userMessage = feedbackFormRef.elements.message.value;
  if (!userEmail || !userMessage) {
    alert('Error fields is empty');
    return;
  }
  const userData = {
    email: userEmail,
    message: userMessage,
  };
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
  feedbackFormRef.reset();
}
