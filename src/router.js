import CreateTournament from './components/Tournament/CreateTournament'
import TournamentList from './components/Tournament/TournamentsList'
import SaveEvent from './components/EventViews/SaveEvent'
import EventList from './components/EventViews/EventList'
export const
    routes = [{
            path: '/createTournament',
            component: CreateTournament
        },
        {
            path: '/tournamentList',
            component: TournamentList
        },
        {
            path: '/saveEvent',
            component: SaveEvent
        },
        {
            path: '/eventsList',
            component: EventList
        }
    ]