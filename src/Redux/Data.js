import { configureStore, createSlice } from "@reduxjs/toolkit";

const MainTopicList = createSlice({
    name: "MainTopicList",
    initialState: {
        Leve1List: [
            { id: 1, name: 'Introducation', path: '/Introducation' },
            { id: 2, name: 'Be-Form', path: '/BeFromLevelList' },
            { id: 3, name: 'WH Question', path: '/WhQuestion' },
            { id: 4, name: 'Tense', path: '/Tense' }
        ],
        Level2List: [
            { id: 1, name: 'Introducation', path: '/IntroducationLevel2' },
            { id: 2, name: 'Model Verb', path: '/ModelVerb' },
            { id: 3, name: 'Structure', path: '/Structure' }
        ]
    },
    reducers: {}
});

const SubTopicOfMainList = createSlice({
    name: "SubTopicOfMainList",
    initialState: {
        BeForm: [
            { id: 1, name: 'Be-Form Introducation', path: '/BeFormIntroducation' },
            { id: 2, name: 'Positive Statement', path: '/PositiveStatement' },
            { id: 3, name: 'Negative Statment', path: '/NegativeStatment' },
            { id: 4, name: 'Positive Question', path: '/PositiveQuestion' },
            { id: 5, name: 'Negative Question', path: '/NegativeQuestion' }
        ],
        WhQuestion: [
            { id: 1, name: 'Wh Question Introducation', path: '/WhQuestionIntroducation' },
            { id: 2, name: 'Positive Wh Question', path: '/PositiveWhQuestion' },
            { id: 3, name: 'Negative Wh Question', path: '/NegativeWhQuestion' },
            { id: 4, name: 'BeForm Positive Wh Question', path: '/BeFormPositiveWhQuestion' },
            { id: 5, name: 'BeForm Nagative Wh Question', path: '/BeFormNagativeWhQuestion' },
        ],
        Tense: [
            { id: 1, name: 'Introduction', path: '/Introduction' },
            { id: 2, name: 'Simple Tense', path: '/SimpleTense' },
            { id: 3, name: 'Continues Tense', path: '/ContinuesTense' },
            { id: 4, name: 'Prefect Tense', path: '/PrefectTense' },
            { id: 5, name: 'Prefect Continues Tense', path: '/PrefectContinuesTense' },
            { id: 6, name: 'Positive Tense Question', path: '/PositiveTenseQuestion' },
            { id: 7, name: 'Negative Tense Question', path: '/NegativeTenseQuestion' },
            { id: 8, name: 'WH Positive Tense Question', path: '/WHPositiveTenseQuestion' },
            { id: 9, name: 'WH Negative Tense Question', path: '/WHNegativeTenseQuestion' }
        ],
        ModelVerb: [
            {id: 1, name: 'Introducation', path: '/Introducation'},
            {id: 2, name: 'Positive Statement', path: '/PositiveStatement'},
            {id: 3, name: 'Negative Statement', path: '/NegativeStatement'},
            {id: 4, name: 'Positive Question', path: '/PositiveQuestion'},
            {id: 5, name: 'Negative Question', path: '/NegativeQuestion'},
            {id: 6, name: 'Wh Positive Question', path: '/WHPositiveQuestion'},
            {id: 7, name: 'Wh Negative Question', path: '/WHNegativeQuestion'}
        ]
    },
    reducers: {}
});

const store = configureStore({
    reducer: {
        mainTopicList: MainTopicList.reducer,
        subTopicList: SubTopicOfMainList.reducer
    }
});

export default store;