export class Sequence {
    static totalSeqs = 0;
    static allSequences = [];
    constructor(seqName) {
        this.seqName = seqName;

        Sequence.allSequences.push(this);
        Sequence.totalSeqs++;
    }
}
