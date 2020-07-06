// Import deps
import React from 'react'

// Import components
import { ClientListRow } from './client-list-row'

// Import styles
//import './../styles/bookshelf-list.css'

// Create interfaces
interface ClientUI {
  id: number;
  author: string;
  title: string;
  pubDate: string;
  rating: string;
}

interface ClientListUI {
  clients: ClientUI[];
  loading: boolean;
  handleClientRemove: (id: number, title: string) => void;
}

// Create BookshelfList component
export const ClientList = (props: ClientListUI) => {
  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />

            <th className="table-head-item">Title</th>

            <th className="table-head-item">Author</th>

            <th className="table-head-item">Pub. date</th>

            <th className="table-head-item">Rating</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        {/* <tbody className="table-body">
          {props.clients.length > 0 ? (
            props.clients.map((client: ClientUI, idx) => (
              <ClientListRow
                key={client.id}
                client={client}
                position={idx + 1}
                handleClientRemove={props.handleClientRemove}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no books to show. Create one!</td>
            </tr>
          )
        }
        </tbody> */}
    </table>
  )
}