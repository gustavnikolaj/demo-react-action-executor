import { incrementCount } from "../store/eventCreators";

export default function IncrementCountAction() {}

IncrementCountAction.prototype.name = "IncrementCountAction";
IncrementCountAction.prototype.execute = function(context, cb) {
  context.store.dispatch(incrementCount());
  cb();
};
