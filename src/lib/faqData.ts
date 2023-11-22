type Faq = {
  rows: {
    title: string;
    content: string;
  }[];
};

const faqData = {
  rows: [
    {
      title: "Is Ghost Link completely anonymous?",
      content:
        "Yes, Ghost Link ensures complete anonymity. Your identity is never revealed when sending or receiving messages.",
    },
    {
      title: "How do I report inappropriate content?",
      content:
        "If you come across any inappropriate messages, use the reporting feature to notify our moderation team. We take user safety seriously.",
    },
    {
      title: "Can I customize my profile on Ghost Link?",
      content:
        "While Ghost Link prioritizes anonymity, you can still add a personal touch by customizing your profile with unique avatars or backgrounds for your messages.",
    },
    {
      title: "Are there any restrictions on the type of messages I can send?",
      content:
        "Ghost Link promotes positive interactions. Any content that violates our community guidelines will be moderated. Keep it fun and respectful for everyone!",
    },
    {
      title: "How can I provide feedback or suggestions for Ghost Link?",
      content:
        "We value your input! Feel free to provide feedback or share your suggestions through our feedback mechanism. Your ideas contribute to making Ghost Link better for everyone.",
    },
  ],
};

export default faqData;
