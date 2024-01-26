import Conversation from "../model/conversation_model.js";

export const newConversation = async (req, res) => {
  try {
    const newTalk = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
    try {
      await newTalk.save();
      res.status(201).json("saved conversation");
    } catch (error) {
      next(error);
    }
  } catch (error) {
    return res.status(500).json({
      error: "Error adding new conversation",
    });
  }
};

export const getUserConverstion = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json("Successfully get converation  " + conversation);
  } catch (error) {
    return res.status(500).json({
      error: "Error while fetching user converations",
    });
  }
};

export const getTwoConveration = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err + "error while getting two user converations");
  }
};
