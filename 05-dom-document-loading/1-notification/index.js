export default class NotificationMessage {
  static currentNotification;
  notificationElement;
  notificationTimer;

  constructor(message = '', {
    duration = 5000,
    type = 'success',
  } = {}) {
    this.message = message;
    this.type = type;
    this.duration = duration;

    this.render();
  }

  get template() {
    return `<div class="notification ${this.type}" style="--value:${this.duration / 1000}s">
      <div class="timer"></div>
      <div class="inner-wrapper">
        <div class="notification-header">${this.type}</div>
        <div class="notification-body">
          ${this.message}
        </div>
      </div>
    </div>`;
  }

  show() {
    if (NotificationMessage.currentNotification) {
      NotificationMessage.currentNotification.remove();
    }

    document.body.append(this.notificationElement);

    this.notificationTimer = setTimeout(() => {
      this.remove();
    }, this.duration);

    NotificationMessage.currentNotification = this;
  }

  render() {
    const element = document.createElement('div');

    element.innerHTML = this.template;

    this.notificationElement = element.firstElementChild;
  }

  remove() {
    clearTimeout(this.notificationTimer);

    if (this.notificationElement) {
      this.notificationElement.remove();
    }
  }

  destroy() {
    this.remove();
    this.notificationElement = null;
    NotificationMessage.currentNotification = null;
  }
}
