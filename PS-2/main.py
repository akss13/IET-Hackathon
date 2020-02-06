import pandas as pd
import docx
import argparse
import sys
import os
from experiment import Experiment

keys = ('Exp. reference ', 'Author Comments', 'Formula Used', 'TestGoal', 'TestMeans',
        'Author', 'TestMethod', 'Testtype', 'ExpStatus', 'Conclusion')

if __name__ == '__main__':
    arg_parser = argparse.ArgumentParser(
        description='Convert Excel Sheet(.xlsx) to Word Document(.docx) based on Template')

    arg_parser.add_argument('-f', '--file',
                            help='Excel File Path (.xlsx)',
                            required=True,
                            default=None)

    arg_parser.add_argument('-t', '--template',
                            help='Template for Conversion (.docx)',
                            required=True,
                            default=None)

    arg_parser.add_argument('-o', '--output',
                            help='Output File Name (.docx)',
                            required=False,
                            default=None)

    args = sys.argv[1:]
    args = arg_parser.parse_args(args)

    if args.file == None and args.template == None:
        print('ERROR :: Plesae specify path for excel file and template file\n\n')
        argparse.ArgumentParser.print_help(arg_parser)
        sys.exit(1)

    if '.docx' != args.template[-5:] or '.xlsx' != args.file[-5:] or ('.docx' != args.output[-5:] if args.output != None else False):
        print('ERROR :: Invalid input file type\n\n')
        argparse.ArgumentParser.print_help(arg_parser)
        sys.exit(1)

    file_path = os.path.expanduser(args.file)
    template_path = args.template
    out_path = args.output if args.output != None else file_path.split('.')[
        0] + '.docx'

    df = pd.read_excel(file_path)
    # template_doc = docx.Document(template_path)

    experiments = list(df['Experiment ID'].unique())
    parsed = {}
    for exp in experiments:
        if str(exp) != 'nan':
            experiment = Experiment(exp, df, keys)
            parsed[exp] = experiment.parsed_data

    for key in parsed:
        print(key, parsed[key])
