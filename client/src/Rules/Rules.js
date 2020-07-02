import React from 'react'
import styled from 'styled-components'

export const Rules = () => {
  return (
    <RulesCard>
      <h2>Rules</h2>

      <p>The main object of Acquire is to become the wealthiest player by the end of the game.  This is done by forming hotel chains, shrewdly buying the right stock at the right time, merging chains to obtain capital and adding hotels to the chains in which you have controlling interest to increase their value.</p>
      <p>At the beginning of the game, each player receives $6,000. To determine who plays first, each player draws one tile (representing a hotel) and places it in its matching square on the board.  (No chains are formed at this time.)  The player who has drawn the lowest number-letter combination starts play.  Each player draws six hotels from the central cluster of face-down tiles on the table and keeps them in his/her "hand", not allowing other players to see them.</p>
      <p>Each player’s turn consists of:</p>
      <ul>
        <li><strong>Placing one of his hotel tiles on its matching square on the board.</strong>  If this hotel creates a chain or causes a merger, all transactions connected with Creating Chains or Merging Chains are completed before the player’s turn continues.</li>
        <li><strong>Buying Stock.</strong>  If, after placing his hotel, there are one or more hotel chains on the board, the player may, if he wishes, buy stock in one or more of them.  (See Buying Stock).</li>
        <li><strong>Drawing another hotel tile to replace the one played.</strong></li>
      </ul>
      
      <hr />
      <h3>CREATING NEW CHAINS</h3>
      <p>When a player places a hotel tile next to one already on the board (rank or file—not diagonally), a chain is created.  For example, hotel tiles A1 and B2 are on the board but do not form a chain as they adjoin diagonally (not rank or file).  Assume that among his six hotels, a player has C2 and B1.  He places C2, creating a two-hotel chain.  (If he had placed B1, he would have created a three-hotel chain; see above diagram.)  Then assume that, on his next turn, he places B1, expanding the chain to four hotels.</p>
      <p>The maker of a chain chooses its name from seven possible chains, taking the appropriate chain marker and placing it atop any one hotel in the chain.  He then receives a "Founder’s Bonus" of one free stock in that chain.  A maximum of seven chains may be on the board at one time.  Any hotel which would create an eighth chain may not be placed.</p>

      <hr />
      <h3>MERGING CHAINS</h3>
      <p>When a player places a hotel adjacent to two (or more) chains, a merger takes place.  The chain with more member hotels takes over the other(s).  If the chains are the same size before the merging hotel was placed, the person who made the merger chooses which chain takes over.  The chain marker of the now defunct chain is removed.</p>
      <p>A chain containing 11 or more hotels is "safe" and cannot be taken over by another chain.  A player may not place a hotel which would merge two safe chains.  A safe chain may still take over an open chain, however.</p>
      <p><strong>MAJORITY HOLDER'S BONUS.</strong>  At merger time, bonuses are paid to the two largest shareholders in the defunct chain.  In the case of a tie for the title of largest shareholder, the first and second bonuses are combined and divided equally between the tying shareholders.  In the case of a tie for the title of second largest shareholder, the second bonus is divided equally between the tying players.  If only one player holds stock in the defunct chain, he receives both bonuses.</p>
      <p><strong>DISPOSAL OF STOCK AT TIME OF MERGER.</strong>  After the bonuses have been paid, each player, starting with the merger maker and continuing clockwise, handles his/her stock in the defunct chain in one or more of the following ways:</p>
      <ul>
        <li><strong>Hold:</strong>  Stock may be held in expectation of starting another chain with that name.</li>
        <li><strong>Sell:</strong>  Stock may be sold to Stock Market at a price determined by the number of hotels in the defunct chain before the merger.</li>
        <li><strong>Trade:</strong>  Stock may be traded at the rate of two blocks of defunct stock for one block of controlling chain stock.  (If the Stock Market has no remaining blocks of controlling chain stock, players may not trade).</li>
      </ul>
      <p><strong>MULTIPLE MERGERS.</strong>  When multiple mergers (mergers of more than two chains at once) occur, the larger chain takes over all smaller chains simultaneously.  The multiple merger is then handled as individual mergers.  Majority holder’s bonuses are paid for the larger of defunct chains and players dispose of their stock in this chain.  Then the smaller defunct chain is handled in the same manner.  In the case of a tie, the merger maker chooses which defunct chain is to be handled first.  Bonuses and stock prices are determined by the number of hotels in the defunct chain before the merger.</p>

      <hr />

      <h3>BUYING STOCK</h3>
      <p>Any player, immediately after playing his hotel, may buy stock in any active chain—up to a maximum of three blocks in any one turn.  If he is unable to place any of his hotels, he may still buy stock.  His purchase may be in one, two or three different chains.  Price per block varies with the number of hotels in the chain.</p>
      <p>A player who runs out of money cannot buy stock but must place a hotel if he is able.  He cannot raise money by selling stock except during the designated disposal period after a merger.  Trading and selling of stock between players is not permitted.  At any time, player may ask how much stock remains in a particular chain.</p>

      <hr />

      <h3>ENDING THE GAME</h3>

      <p>The game ends when one player, during his turn, announces that either all chains on board are "safe" or that any one chain contains 41 or more hotels.  A player does not have to announce that the game is over if it is to his advantage to continue playing.  After announcing that the game is over, the player may still complete his turn.</p>
      <p>To determine the winner, all chains are bought out by the bank.  Majority holder’s bonuses are paid for all active chains.  All players sell their stock.  Stock in a chain that is not on the board is worthless.  The player with the most money is the winner.</p>

    </RulesCard>
  )
}

const RulesCard = styled.div`
  /* background-color: rgb(0, 36, 95); */
  padding: 25px;
  border-radius: 5px;
  box-shadow: 1px 1px 7px 3px rgba(0, 0, 0, 0.1);
  min-width: 30%;
  flex: 1;
  height: 100%;
  font-size: 13px;
  line-height: 1.6;
  overflow-y: scroll;
  /* color: white; */

  ::-webkit-scrollbar {
    background: none;
    width: 10px;
    transition: 0.3s;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2); 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 161, 161, 0.7);
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  h2,h3 {
    background: rgb(253, 92, 92);
    transform: skew(-15deg);
    display: inline-block;
    line-height: 1;
    padding: 5px;
    margin-bottom: 15px;
  }

  &>h2 {
    margin-bottom: 20px;
  }

  &>p {
    margin-bottom: 10px;
  }

  & > ul {
    padding-left: 15px;

    & > li {
      margin-bottom: 10px;
    }
  }

  hr {
    margin: 20px 0;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`