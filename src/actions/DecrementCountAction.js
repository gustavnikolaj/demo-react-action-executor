import { decrementCount } from "../store/eventCreators";

export default function DecrementCountAction() {}

DecrementCountAction.prototype.name = "DecrementCountAction";
DecrementCountAction.prototype.execute = function(context, cb) {
  context.store.dispatch(decrementCount());
  cb();
};
