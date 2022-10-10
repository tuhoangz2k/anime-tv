function useTrunc(string, max) {
    if (!string)
        string =
            'The hero of Tensei shitara Ken deshita differs from your standard otherworldly protagonist in that he is reincarnated as a sword! Beginning his quest by spawning in the middle of a beast-ridden forest, he encounters an injured girl frantically fleeing for her life. Saving her from her assailants, the pair acquaint themselves, and the girl introduces herself as Fran. She bears a heavy past, having endured the enslavement and maltreatment of her tribe, the Black Cats. As the hero is unable to remember the name from his past life, the young and tenacious Fran bestows him the name "Shishou" and becomes his wielder. Thereafter, Shishou and Fran become a formidable team, embarking on quests to liberate the oppressed and exact justice! [Written by MAL Rewrite]';
    if (string.length > max) {
        let newString = string.slice(0, max - 1);
        return `${newString}...`;
    }
    return string;
}

export default useTrunc;
