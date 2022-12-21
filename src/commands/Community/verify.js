const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports =  {
    data: new SlashCommandBuilder()
    .setName('verify')
    .setDescription('with this command you will be able to access the rest of the server'),
    async execute(interaction, client) {
      const member = interaction.member;

      const embed = new EmbedBuilder()
      .setColor("#be6666")
      .setDescription("MESSAGE")

      member.roles.add("ROLE ID")

        await interaction.reply({ embeds:[embed] });
    }
}
