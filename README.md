# Node Full Stack Challenge

## Challenge
This test focuses on building a simple full stack web application via Express (Backend) and Vuejs (Frontend).

Feel free to use any existing UI component library you are familiar with in this project.

## Requirements
Please find the symbols.json file in this repo. Download the symbols.json to your local computer as this will be your sample server data file.
Write a simple web application that allows any user to get, add, update and delete symbol.
All CRUD data will be stored in symbols.json

Symnbol data structure explain:

| Column | Desc | Data Type |
| ------ | ------ | ------ |
| id | Simulated primary key (Auto increment) | string |
| name | Trading symbol name | string |
| description | The description of this symbol | string |
| currency | The major currency | string |
| type | Which security group this symbol belongs to | int |
| trade | The trade flag settings | int |
| swap_long | The storage price for long order | float |
| swap_short | The storage price for short order | float |
| contract_size | Contract size is the deliverable quantity of commodities or financial instruments that underlie futures and options contracts traded on an exchange | int |
| margin_currency | The currency used for profit calculation | float |

Type
2 => Full, 1 => Close Only, 0 = No

Trade
1 => Forex, 2 => Commodity, 3 => Index, 4 => Test, 5 => Stocks

Notice the "Type" and "Trade" field will be displayed as a selection box or any other UI component you think might be better to be displayed to user. Do not show an integer input box as user don't know what each integer stands for. 

## Submission

Please include a README.MD in teh repo including a copy of the following points with answer for each point:
- how to setup and run
- documentation on the solution
- how long did you spend ceating the application
- any assumptions made
- any queries that need resolving
- what part of the application you most proud of (if any)
- any improvements you would make

