import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/app';

export default class BaseStore extends EventEmitter {

	constructor() {
		super();
	}

	subscribe(actionSubscribe) {
		this._dispatchToken = AppDispatcher.register(actionSubscribe());
	}

	get dispatchToken() {
		return this._dispatchToken;
	}

	emitChange() {
		this.emit('change');
	}

	addChangeListener(cb) {
		this.on('change', cb);
	}

	removeChangeListener(cb) {
		this.removeListener('change', cb);
	}
}