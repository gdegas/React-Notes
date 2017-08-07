-- up
CREATE TABLE notes (
  id            serial,
  title         text,
  content       text,
  create_date   timestamptz(6) not null default now()
  );
---

-- down

DROP TABLE IF EXISTS notes;
