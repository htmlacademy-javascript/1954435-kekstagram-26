import {renderThumbnails} from './thumbnails.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './submit-form.js';


getData((photos) => {
  renderThumbnails(photos);

});

setUserFormSubmit();

