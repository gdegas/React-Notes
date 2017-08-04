-- up
CREATE TABLE notes (
  id            serial,
  title         text,
  content       text,
  create_date   date default now()
  );
---

-- down

DROP TABLE IF EXISTS notes;
