class Experiment:
    def __init__(self, exp_id, df, keys):
        self.exp_id = exp_id
        self.keys = keys
        self.parsed_data = {}
        self.parse_all_data(df)

    def parse_all_data(self, df):
        exp_begin_row = int(
            df.loc[df['Experiment ID'] == self.exp_id].index[0])
        for key in self.keys:
            self.parsed_data[key] = df.loc[exp_begin_row][key]
        self.parsed_data['Section'] = df.loc[exp_begin_row]['Section'][0]
        self.parsed_data['Procedure'] = []
        num_rows = len(df)
        for i in range(exp_begin_row, num_rows):
            if str(df.loc[i]['Experiment ID']) != 'nan' and i != exp_begin_row:
                print('breaking', i)
                break
            self.parsed_data['Procedure'].append(df.loc[i]['Procedure'])
