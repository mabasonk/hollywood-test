import CreateTournament from './components/Tournament/CreateTournament'
import TournamentList from './components/Tournament/TournamentsList'

export const
    routes = [{
            path: '/createTournament',
            component: CreateTournament
        },
        {
            path: '/tournamentList',
            component: TournamentList
        }
    ]