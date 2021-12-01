import { Category } from '../model/Category';
import { Priority } from '../model/Priority';
import { Task } from '../model/Task';

export class TestData {

    static categories: Category[] = [
        {id: 1, title: 'text1'},
        {id: 2, title: 'text2'},
        {id: 3, title: 'text3'},
        {id: 4, title: 'text4'},
        {id: 5, title: 'text5'},
        {id: 6, title: 'text6'},
        {id: 7, title: 'text7'},
        {id: 8, title: 'text8'},
        {id: 9, title: 'text9'},
        {id: 10, title: 'text10'},
    ];

    static priorities: Priority[] = [
        {id: 1, title: 'string1', color: '#000'},
        {id: 2, title: 'string2', color: '#fff'},
        {id: 3, title: 'string3', color: '#e5e5e5'},
        {id: 4, title: 'string4', color: '#F1128D'}
    ];


    static tasks: Task[] = [
        {
            id: 1,
            title: 'Angular',
            priority: TestData.priorities[5],
            completed: false,
            category: TestData.categories[7],
            date: new Date('2019-04-29')
        },

        {
            id: 2,
            title: 'Table',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[9],
            date: new Date('2000-06-11')
        },

        {
            id: 3,
            title: 'Javascript',
            priority: TestData.priorities[4],
            completed: false,
            category: TestData.categories[2],
        },

        {
            id: 4,
            title: 'Table1',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[5],
            date: new Date('2021-06-11')
        },

        {
            id: 5,
            title: 'Javascript1',
            priority: TestData.priorities[6],
            completed: false,
            category: TestData.categories[3],
        },

        {
            id: 6,
            title: 'Table2',
            priority: TestData.priorities[2],
            completed: true,
            category: TestData.categories[8],
            date: new Date('2002-06-11')
        },

        {
            id: 7,
            title: 'Javascript2',
            priority: TestData.priorities[0],
            completed: false,
            category: TestData.categories[6],
        },
    ];
}