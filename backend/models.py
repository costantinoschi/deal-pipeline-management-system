class Deal:
    def __init__(self, id, name, stage, notes):
        self.id = id
        self.name = name
        self.stage = stage
        self.notes = notes

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "stage": self.stage,
            "notes": self.notes
        }