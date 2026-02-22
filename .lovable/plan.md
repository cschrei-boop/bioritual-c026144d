

## CSV Component Inventory

Create a CSV file at `public/component-inventory.csv` with columns:

| Column | Description |
|--------|-------------|
| Name | Component filename |
| Type | Template, Reusable Block, or Page-Specific |
| Category | e.g. Layout, Marketing, Blog, Product, Illustration |
| File Path | Full path in repo |
| Used In | Pages/components that import it |
| Status | Active, Orphaned, or Internal |

### Data source

The inventory from the previous audit covers ~45 components across:
- 3 Templates
- ~22 Reusable Blocks
- ~12 Page-Specific / Orphaned components
- 6 Illustrations

I'll scan imports to confirm usage status for each, then output a single CSV file.

### Technical details
- File location: `public/component-inventory.csv`
- Standard CSV with header row, comma-delimited, double-quote escaped values
- "Used In" column will list all importing files separated by semicolons

