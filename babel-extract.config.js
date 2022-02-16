const { defaultLanguage } = require("./languages")

module.exports = {
  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "i18next-extract",
      {
        keySeparator: null,
        nsSeparator: null,
        keyAsDefaultValue: [defaultLanguage],
        useI18nextDefaultValue: [defaultLanguage],
        discardOldKeys: true,
        defaultNS: "locale",
        outputPath: "locales/{{locale}}/translation.json",
        customTransComponents: [["gatsby-plugin-react-i18next", "Trans"]],
      },
    ],
  ],
}
