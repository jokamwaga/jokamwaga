# Reverting to Manual (localStorage-only) Mode

If you encounter issues with Firebase cloud sync, you can revert to the original manual mode where data is stored only in your browser's localStorage.

## Steps

1. **Delete** `js/firebase-config.js`
2. **Open** `index.html` and remove these 3 lines:
   ```html
   <script src="https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/11.0.1/firebase-database-compat.js"></script>
   <script src="js/firebase-config.js"></script>
   ```
3. **Save** both files, commit, and push

## Important

- Your latest data is **already saved in your browser's localStorage** — it will not be lost
- Other users will only see the **default data** from `script.js` or whatever they have saved locally
- Only you will see your edits again

## To Restore Firebase Later

- Create `js/firebase-config.js` again with your Firebase config
- Add the 3 script lines back to `index.html`
- Commit and push
