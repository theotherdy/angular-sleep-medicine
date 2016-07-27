import { Modyule } from './modyule';
import { Week } from './week';
import { Lecture } from './lecture';
import { Seminar } from './seminar';
import { Assignment } from './assignment';
export var MODYULES: Modyule[] = [
    {
        siteId: '1234567890abcdefg', 
        name: 'Module 1', 
        startDate: null,
        endDate: null,
        currentModyule: false,
        users:[
            {
                id: 1,
                sso: 'mdiv0001',
                modyules: []
            },
            {
                id: 2,
                sso: 'mdiv0002',
                modyules: []
            }
        ],
        weeks: [
            <Week> {
                id: '1',
                name: 'Week 1',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Induction',
                        description: 'Introduction to the course [Sumathi Sekeran]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Sleep overview - circadian, homeostatic and social regulation of sleep',
                        description: 'Function of sleep. Overview of different processes involved. Gender differences? [Russell Foster]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [],
            },
            <Week> {
                id: '2',
                name: 'Week 2',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Sleep Stages 1',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Sleep Stages 1',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Journal Club – Glymphatic system/Sleep switch',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 1',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            },
            <Week> {
                id: '3',
                name: 'Week 3',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Sleep neuroanatomy and neurochemistry',
                        description: 'Relation to wakefulness [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Other]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Tutor led discussion - Drugs and sleep/wake pathways',
                        description: '[Sumathi Sekeran & Vlad Vyazovskly]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Eassy 2',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            }
        ],
        assessments: []
        
    },
    {
        siteId: '2234567890abcdefg', 
        name: 'Module 2',
        startDate: null,
        endDate: null,
        currentModyule: false,
        users:[
            {
                id: 1,
                sso: 'mdiv0001',
                modyules: []
            },
            {
                id: 2,
                sso: 'mdiv0002',
                modyules: []
            }
        ],
        weeks: [
            <Week> {
                id: '1',
                name: 'Week 1',
                startDate: new Date('2016-07-01T23:28:56.782Z'),
                endDate: new Date('2016-07-08T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Lecture 1',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Lecture 2',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 1',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Seminar 1',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 1',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            },
            <Week> {
                id: '2',
                name: 'Week 2',
                startDate: new Date('2016-07-09T23:28:56.782Z'),
                endDate: new Date('2016-07-16T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Lecture 3',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Lecture 4',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 2',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Seminar 2',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 2',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            },
            <Week> {
                id: '3',
                name: 'Week 3',
                startDate: new Date('2016-07-17T23:28:56.782Z'),
                endDate: new Date('2016-07-24T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Lecture 5',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Lecture 6',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 3',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Seminar 3',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 3',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            },
            <Week> {
                id: '4',
                name: 'Week 4',
                startDate: new Date('2016-07-25T23:28:56.782Z'),
                endDate: new Date('2016-08-07T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Lecture 7',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Lecture 8',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 4',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Seminar 4',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 4',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            },
            <Week> {
                id: '5',
                name: 'Week 5',
                startDate: new Date('2016-08-08T23:28:56.782Z'),
                endDate: new Date('2016-08-15T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Lecture 9',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Lecture 10',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 5',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Seminar 5',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 5',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            },
            <Week> {
                id: '6',
                name: 'Week 6',
                startDate: new Date('2016-08-16T23:28:56.782Z'),
                endDate: new Date('2016-08-23T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Lecture 11',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Lecture 12',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 6',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Seminar 6',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 6',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            },
            <Week> {
                id: '7',
                name: 'Week 7',
                startDate: new Date('2016-08-24T23:28:56.782Z'),
                endDate: new Date('2016-08-31T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Lecture 13',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Lecture 14',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 7',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Seminar 7',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 7',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            },
            <Week> {
                id: '8',
                name: 'Week 8',
                startDate: new Date('2016-09-01T23:28:56.782Z'),
                endDate: new Date('2016-09-08T23:28:56.782Z'),
                modyule: null,
                resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%202/Seminar/',
                lectures: [
                    <Lecture> {
                        id: '1',
                        title: 'Lecture 15',
                        description: 'Homeostasis and slow wave sleep. NREM [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '2',
                        title: 'Lecture 16',
                        description: 'REM, subcortical mechanisms [Vlad Vyazovskly]',
                        type: 'main',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    },
                    <Lecture> {
                        id: '3',
                        title: 'Mini Lecture 8',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. [A N Expert]',
                        type: 'supplementary',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77875/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/weblearn.ox.ac.uk_20160718132954.url',
                        mobileUrl: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77876/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Sleep%20overview%20-%20circadian,%20homeostatic%20and%20social%20regulation%20of%20sleep/urls/https:__youtu.be_D0eXM72iy4U.url',
                        learningOutcomes: '<ol style="line-height: 20.8px;"><li>Demonstrate a broad understanding of sleep as a complex neurophysiologic phenomenon ubiquitous across the animal kingdom;</li><li>Describe basic physiological processes associated with sleep/wake behavior in animals and humans;</li><li>Explain how sleep is regulated through the interaction of homeostatic and circadian process and how it is influenced by environment and disease;</li><li>Give examples of abnormal sleep patterns in healthy subjects and in patients, and discuss the origin and mechanisms of sleep disruption;</li><li>Compare methodological approaches used in basic research and clinical practice to record and analyse sleep;&nbsp;&nbsp;</li><li>Critically discuss leading theories of sleep function;</li></ol>'
                    }
                ],
                seminars: [
                    <Seminar> {
                        id: '1',
                        title: 'Seminar 8',
                        description: 'Cras suscipit, magna ut tincidunt posuere, dolor dolor mollis lorem, sit amet faucibus arcu dui non neque. [Sumathi Sekeran]',
                        url: 'https://weblearn.ox.ac.uk/access/lessonbuilder/item/77877/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/lessons/Seminars/urls/https:__ox.webex.com.url',
                        resourcesUrl: 'https://weblearn.ox.ac.uk/access/content/group/a20b83f9-4d3a-4e99-b0c2-849c849f2187/Week%201/Seminar/',
                        assignments:[
                            <Assignment> {
                                id: '1',
                                title: 'Essay 8',
                                description: 'Fusce porta quam nisl, id sollicitudin lacus laoreet quis. Aliquam mi enim, molestie quis ipsum quis, cursus commodo magna.',
                                url: 'https://weblearn.ox.ac.uk/portal/hierarchytool/481617e3-104e-4c4c-84d7-eb2fde073ff8/ShowItem?errorMessage=&clearAttr=&newTopLevel=false&recheck=&itemId=77884&id=&addTool=-1&title=&source=https%3A%2F%2Fweblearn.ox.ac.uk%2Fportal%2Fhierarchytool%2F81d7b647-8bb6-4242-a2a8-34fefa4404fb%3FassignmentReference%3D%2Fassignment%2Fa%2Fa20b83f9-4d3a-4e99-b0c2-849c849f2187%2F8a9e9fed-f7ed-4a7b-ad4c-b98b759aebce%26panel%3DMain%26sakai_action%3DdoView_submission&studentItemId=0&backPath=&sendingPage=13495&path=&postedComment=false&returnView='
                            }
                        ]
                    }
                ],
            }
        ],
        assessments: []
        
    },
    {
        siteId: '3234567890abcdefg', 
        name: 'Module 3', 
        startDate: null,
        endDate: null,
        currentModyule: false,
        users:[
            {
                id: 1,
                sso: 'mdiv0001',
                modyules: []
            },
            {
                id: 2,
                sso: 'mdiv0002',
                modyules: []
            }
        ],
        weeks: [
            <Week> {
                id: '1',
                name: 'Week 1',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                lectures: [],
                seminars: [],
            },
            <Week> {
                id: '2',
                name: 'Week 2',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                lectures: [],
                seminars: [],
            },
            <Week> {
                id: '3',
                name: 'Week 3',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                lectures: [],
                seminars: [],
            }
        ],
        assessments: []
        
    },
    {
        siteId: '4234567890abcdefg', 
        name: 'Module 4',
        startDate: null,
        endDate: null,
        currentModyule: false,
        users:[
            {
                id: 1,
                sso: 'mdiv0001',
                modyules: []
            },
            {
                id: 2,
                sso: 'mdiv0002',
                modyules: []
            }
        ],
        weeks: [
            <Week> {
                id: '1',
                name: 'Week 1',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                lectures: [],
                seminars: [],
            },
            <Week> {
                id: '2',
                name: 'Week 2',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                lectures: [],
                seminars: [],
            },
            <Week> {
                id: '3',
                name: 'Week 3',
                startDate: new Date('2014-01-01T23:28:56.782Z'),
                endDate: new Date('2014-01-01T23:28:56.782Z'),
                modyule: null,
                lectures: [],
                seminars: [],
            }
        ],
        assessments: []
        
    }
];