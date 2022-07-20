import {renderThumbnails} from './thumbnails.js';
import { getData } from './api.js';
import { setUserFormSubmit } from './submit-form.js';
import {initializeFilters} from './filters.js';

getData((posts) => {
  renderThumbnails(posts);
  initializeFilters (posts);

});

setUserFormSubmit();


