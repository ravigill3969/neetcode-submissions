class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}


class PrefixTree {
    constructor() { this.root = new TrieNode(); }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let c = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!c.children.has(word[i])) {
                c.children.set(word[i], new TrieNode());
            }
            c = c.children.get(word[i]);
        }
        c.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root;

        for (let c of word) {
            if (!cur.children.has(c)) return false;

            cur = cur.children.get(c);
        }

        if (cur.endOfWord) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root;

        for (let c of prefix) {
            if (!cur.children.has(c)) return false;

            cur = cur.children.get(c);
        }

        return true;
    }
}
