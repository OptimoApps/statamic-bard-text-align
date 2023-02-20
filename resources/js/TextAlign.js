/*
 * *
 *  *  * Copyright (C) optimoapps.com - All Rights Reserved
 *  *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  *  * Proprietary and confidential
 *  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>, ManiKandan<smanikandanit@gmail.com >
 *  *
 *
 */
const { Mark } = Statamic.$bard.tiptap.core;

const TextAlign = Mark.create({
  name: "textAlign",

  addAttributes() {
    return {
      align: {
        default: "left",
      },
    };
  },

  parseHTML() {
    return [
      {
        style: "text-align",
        getAttrs: (value) => ({ align: value }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      {
        style: `text-align: ${HTMLAttributes.align}; display: block;`,
      },
      0,
    ];
  },

  addCommands() {
    return {
      textAlign: (attrs) => ({ commands }) => {
        return commands.updateAttributes("textAlign", attrs);
      },
    };
  },
});

export default TextAlign;
