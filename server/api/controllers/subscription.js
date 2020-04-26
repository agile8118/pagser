const User = require("../../models/user");
const Subscription = require("../../models/subscription");

exports.toggle = async (req, res) => {
  try {
    const authorId = req.params.id;
    const userId = req.user.id;

    const sub = await Subscription.findOne({
      author: authorId,
      subscriber: userId,
    });

    if (!sub) {
      // Create a new subscription
      await Subscription.create({ author: authorId, subscriber: userId });
      const subscribers = await Subscription.find({ author: authorId });
      res.send({ subscribed: true, subNum: subscribers.length });
    } else {
      // Remove the subscription
      await Subscription.findOneAndRemove({
        author: authorId,
        subscriber: userId,
      });
      const subscribers = await Subscription.find({ author: authorId });
      res.send({ subscribed: false, subNum: subscribers.length });
    }
  } catch (e) {
    return res.status(500).send({ message: "Error" });
  }
};
