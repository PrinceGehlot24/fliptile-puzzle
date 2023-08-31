import { create } from "zustand";
import { shallow } from "zustand/shallow";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.png";
import img12 from "../images/img12.png";
import img13 from "../images/img13.png";
import img14 from "../images/img14.png";
import img15 from "../images/img15.png";
import img16 from "../images/img16.png";


export const useStore = create((set, get) => ({
    cardsLevelOne: [
        { id: "1", img: img1, isFlipped: false, key: 1, complete: false },
        { id: "2", img: img2, isFlipped: false, key: 2, complete: false },
        { id: "3", img: img3, isFlipped: false, key: 3, complete: false },
        { id: "4", img: img4, isFlipped: false, key: 4, complete: false },
        { id: "5", img: img5, isFlipped: false, key: 5, complete: false },
        { id: "6", img: img6, isFlipped: false, key: 6, complete: false },
        { id: "7", img: img7, isFlipped: false, key: 7, complete: false },
        { id: "8", img: img8, isFlipped: false, key: 8, complete: false },
        { id: "9", img: img9, isFlipped: false, key: 9, complete: false },
        { id: "10", img: img10, isFlipped: false, key: 10, complete: false },
        { id: "11", img: img1, isFlipped: false, key: 1, complete: false },
        { id: "12", img: img2, isFlipped: false, key: 2, complete: false },
        { id: "13", img: img3, isFlipped: false, key: 3, complete: false },
        { id: "14", img: img4, isFlipped: false, key: 4, complete: false },
        { id: "15", img: img5, isFlipped: false, key: 5, complete: false },
        { id: "16", img: img6, isFlipped: false, key: 6, complete: false },
        { id: "17", img: img7, isFlipped: false, key: 7, complete: false },
        { id: "18", img: img8, isFlipped: false, key: 8, complete: false },
        { id: "19", img: img9, isFlipped: false, key: 9, complete: false },
        { id: "20", img: img10, isFlipped: false, key: 10, complete: false },
    ],
    cardsLevelTwo: [
        { id: "1", img: img1, isFlipped: false, key: 1, complete: false },
        { id: "2", img: img2, isFlipped: false, key: 2, complete: false },
        { id: "3", img: img3, isFlipped: false, key: 3, complete: false },
        { id: "4", img: img4, isFlipped: false, key: 4, complete: false },
        { id: "5", img: img5, isFlipped: false, key: 5, complete: false },
        { id: "6", img: img6, isFlipped: false, key: 6, complete: false },
        { id: "7", img: img7, isFlipped: false, key: 7, complete: false },
        { id: "8", img: img8, isFlipped: false, key: 8, complete: false },
        { id: "9", img: img9, isFlipped: false, key: 9, complete: false },
        { id: "10", img: img10, isFlipped: false, key: 10, complete: false },
        { id: "11", img: img11, isFlipped: false, key: 11, complete: false },
        { id: "12", img: img12, isFlipped: false, key: 12, complete: false },
        { id: "13", img: img13, isFlipped: false, key: 13, complete: false },
        { id: "14", img: img14, isFlipped: false, key: 14, complete: false },
        { id: "15", img: img15, isFlipped: false, key: 15, complete: false },
        { id: "16", img: img16, isFlipped: false, key: 16, complete: false },
        { id: "17", img: img1, isFlipped: false, key: 1, complete: false },
        { id: "18", img: img2, isFlipped: false, key: 2, complete: false },
        { id: "19", img: img3, isFlipped: false, key: 3, complete: false },
        { id: "20", img: img4, isFlipped: false, key: 4, complete: false },
        { id: "21", img: img5, isFlipped: false, key: 5, complete: false },
        { id: "22", img: img6, isFlipped: false, key: 6, complete: false },
        { id: "23", img: img7, isFlipped: false, key: 7, complete: false },
        { id: "24", img: img8, isFlipped: false, key: 8, complete: false },
        { id: "25", img: img9, isFlipped: false, key: 9, complete: false },
        { id: "26", img: img10, isFlipped: false, key: 10, complete: false },
        { id: "27", img: img11, isFlipped: false, key: 11, complete: false },
        { id: "28", img: img12, isFlipped: false, key: 12, complete: false },
        { id: "29", img: img13, isFlipped: false, key: 13, complete: false },
        { id: "30", img: img14, isFlipped: false, key: 14, complete: false },
        { id: "31", img: img15, isFlipped: false, key: 15, complete: false },
        { id: "32", img: img16, isFlipped: false, key: 16, complete: false },

    ],
    shuffleCards: (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    },
    initialCardValues: [],
    shuffleInitialCardValuesOne: () => { set({ initialCardValues: get().shuffleCards(get().cardsLevelOne) }) },
    shuffleInitialCardValuesTwo: () => { set({ initialCardValues: get().shuffleCards(get().cardsLevelTwo) }) },
    flippedCards: [],
    handleFlippedCard: (index) => {
        if (get().flippedCards.length == 0 || get().flippedCards.length == 1) {
            set((state) => ({ flippedCards: [state.initialCardValues[index], ...state.flippedCards] }))
            get().addCountMoves()
            get().checkFlippedCard(get().flippedCards)
        }
    },
    checkFlippedCard: (cards) => {
        if (cards[0].id != cards[1].id && cards[0].key == cards[1].key) {
            set(() => ({ flippedCards: [] }))
            get().updateEqualCard(cards[0].id)
            get().updateEqualCard(cards[1].id)
            get().addCardFound()
        } else {
            set(() => ({ flippedCards: [] }))
            setTimeout(() => {
                get().updateUnEqualCard(cards[0].id)
                get().updateUnEqualCard(cards[1].id)
            }, 700);

        }
    },
    updateEqualCard: (id) =>
        set(state => ({
            initialCardValues: state.initialCardValues.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        id: item.id,
                        img: item.img,
                        isFlipped: !item.isFlipped,
                        key: item.key,
                        complete: true
                    }
                } else {
                    return item;
                }
            })
        })),
    updateUnEqualCard: (id) =>
        set(state => ({
            initialCardValues: state.initialCardValues.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        id: item.id,
                        img: item.img,
                        isFlipped: !item.isFlipped,
                        key: item.key,
                        complete: false
                    }
                } else {
                    return item;
                }
            })
        })),
    countMoves: 0,
    resetCountMoves: () => set({countMoves: 0}),
    addCountMoves: () => set(prev => ({ countMoves: prev.countMoves + 1 })),
    cardFound: 0,
    addCardFound: () => set(prev => ({ cardFound: prev.cardFound + 1 })),
    isStarted: false,
    setIsStarted: () => set(prev => (!prev)),
    level : 1,
    addLevel: () => {set(prev => ({ level: prev.level + 1}))},
    subLevel: () => {set(prev => ({ level: prev.level - 1}))},
}));
