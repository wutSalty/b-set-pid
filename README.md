# b-set-pid

## What the heck is this

B Sets (also known as Waratah Series 2) are double-decker electric multiple units that operate on the Sydney Trains network. Compared to their predecesors, B Sets were the first to include LCD passenger information displays (PIDs) for upcoming stop information.

Since their introduction in 2018, the PIDs have only gone through one major refresh. However, compared to other rail networks, the information displayed on the B Sets PID is extremely basic and a poor use of otherwise valuable screen space.

This project is a work-in-progress somewhat functional mockup of what an actually good PID might look like.

## Tips and suggestions
- Try not to use station names that are too long
- 6 interchange lines per row before things break
- Round icons don't do well with more than 1 character
- Domestic and International are hard-coded to have an airplane icon in the upcoming list
- Click on a colour in the template to paste it into a colour input

## Self-deployment
1. git clone
2. cd b-set-pid
2. npm i
3. npm run dev
4. access at localhost:3000/b-set-pid

## WIP/TODO

- Default station arrival screen
- Alternate station arrival screen
- Dark mode
