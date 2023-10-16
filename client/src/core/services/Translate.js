import fa from '../../lang/fa';
import en from "../../lang/en";

class Translate {

    static localNumber(number = 0) {
        return String(number).replace(/[0-9]/g, c => String.fromCharCode(c.charCodeAt(0) + 1728));
    }

    static init(label, items = null) {
        console.log(items)
        const lang = 'fa'
        let subject = ''
        if (lang === 'fa')
            subject = fa[label] ? fa[label] : label;
        if (lang === 'en')
            subject = en[label] ? en[label] : label;
        if (items)
            items.map(item => subject = subject.replace("item", item))
        return subject;
    }

    static englishCharacters(character = null, capOrLaw = 'both') {
        const code = character.charCodeAt(0)
        switch (capOrLaw) {
            case 'both':
                if ((code > 64 && code < 91) ||
                    (code > 96 && code < 123))
                    return true;
                break;
            case 'lower':
                if(code > 64 && code < 91)
                    return true;
                break;
            case 'capital':
                if(code > 96 && code < 123)
                    return true;
                break;
        }
        return false;

    }
}


export default Translate;